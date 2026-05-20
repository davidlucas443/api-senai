import React, { useEffect, useMemo, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import * as Linking from 'expo-linking';
import {
  ActivityIndicator,
  Chip,
  Divider,
  Snackbar,
  Surface,
  Text,
  useTheme,
} from 'react-native-paper';
import ContactForm from '../components/ContactForm';
import CourseCard from '../components/CourseCard';
import CourseDetailsModal from '../components/CourseDetailsModal';
import SchoolInfoCard from '../components/SchoolInfoCard';
import { COURSE_AREAS } from '../constants/courseSeed';
import { getCourses, initializeDatabase, saveEnrollment } from '../database/sqlite';
import { sendContact } from '../services/contactService';
import { sendEnrollment } from '../services/enrollmentService';

const EMAIL_SENAI = 'contato@suico.senai.br';

export default function HomeScreen() {
  const theme = useTheme();
  const [loading, setLoading] = useState(true);
  const [submittingEnrollment, setSubmittingEnrollment] = useState(false);
  const [submittingContact, setSubmittingContact] = useState(false);
  const [courses, setCourses] = useState([]);
  const [selectedArea, setSelectedArea] = useState('Todas');
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [snackbar, setSnackbar] = useState({ visible: false, message: '' });

  useEffect(() => {
    async function setup() {
      try {
        await initializeDatabase();
        const result = await getCourses();
        setCourses(result);
      } catch (error) {
        setSnackbar({
          visible: true,
          message: 'Nao foi possivel carregar os cursos no momento.',
        });
      } finally {
        setLoading(false);
      }
    }

    setup();
  }, []);

  async function handleFilter(area) {
    setSelectedArea(area);
    const filtered = await getCourses(area);
    setCourses(filtered);
  }

  function openCourse(course) {
    setSelectedCourse(course);
    setModalVisible(true);
  }

  function closeModal() {
    setModalVisible(false);
  }

  async function handleEnrollment(course) {
    setSubmittingEnrollment(true);

    try {
      await saveEnrollment(course.id);
      await sendEnrollment(course);
      setSnackbar({
        visible: true,
        message: `Matricula no curso ${course.title} realizada com sucesso.`,
      });
      setModalVisible(false);
    } catch (error) {
      setSnackbar({
        visible: true,
        message: 'Matricula salva localmente. Servico externo indisponivel agora.',
      });
      setModalVisible(false);
    } finally {
      setSubmittingEnrollment(false);
    }
  }

  function handleContactFromCourse(course) {
    const url = `mailto:${EMAIL_SENAI}?subject=${encodeURIComponent(`Interesse no curso ${course.title}`)}`;
    Linking.openURL(url);
  }

  async function handleContactSubmit(formData) {
    setSubmittingContact(true);

    try {
      await sendContact(formData);
      setSnackbar({ visible: true, message: 'Contato enviado com sucesso.' });
    } catch (error) {
      setSnackbar({
        visible: true,
        message: 'Nao foi possivel enviar para o servidor. Tente novamente.',
      });
    } finally {
      setSubmittingContact(false);
    }
  }

  const areas = useMemo(() => ['Todas', ...COURSE_AREAS], []);

  return (
    <View style={[styles.screen, { backgroundColor: theme.colors.background }]}> 
      <ScrollView contentContainerStyle={styles.content}>
        <Text variant="headlineMedium" style={styles.heading}>
          Cursos de Desenvolvimento SENAI
        </Text>
        <Text variant="bodyLarge" style={styles.subheading}>
          Explore os cursos, abra detalhes em modal e faca sua matricula pelo app.
        </Text>

        <SchoolInfoCard />

        <Surface style={styles.filterSection} elevation={1}>
          <Text variant="titleMedium" style={styles.filterTitle}>
            Filtrar por area
          </Text>
          <View style={styles.chipsWrap}>
            {areas.map((area) => (
              <Chip
                key={area}
                selected={selectedArea === area}
                onPress={() => handleFilter(area)}
                style={styles.chip}
              >
                {area}
              </Chip>
            ))}
          </View>
        </Surface>

        <Divider style={styles.divider} />

        {loading ? (
          <View style={styles.loadingBox}>
            <ActivityIndicator animating size="large" />
            <Text>Carregando cursos...</Text>
          </View>
        ) : (
          courses.map((course) => <CourseCard key={course.id} course={course} onPress={openCourse} />)
        )}

        <ContactForm onSubmit={handleContactSubmit} loading={submittingContact} />

        <Surface style={styles.contactInfo} elevation={0}>
          <Text variant="titleMedium">Contato direto</Text>
          <Text variant="bodyMedium">E-mail: {EMAIL_SENAI}</Text>
        </Surface>
      </ScrollView>

      <CourseDetailsModal
        visible={modalVisible}
        course={selectedCourse}
        onDismiss={closeModal}
        onEnroll={handleEnrollment}
        onContact={handleContactFromCourse}
        submitting={submittingEnrollment}
      />

      <Snackbar
        visible={snackbar.visible}
        onDismiss={() => setSnackbar({ visible: false, message: '' })}
        duration={2500}
      >
        {snackbar.message}
      </Snackbar>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  content: {
    padding: 16,
    paddingBottom: 80,
  },
  heading: {
    fontWeight: '900',
    marginBottom: 6,
  },
  subheading: {
    marginBottom: 16,
  },
  filterSection: {
    borderRadius: 18,
    padding: 12,
    marginBottom: 10,
  },
  filterTitle: {
    marginBottom: 8,
    fontWeight: '700',
  },
  chipsWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  chip: {
    marginBottom: 6,
  },
  divider: {
    marginVertical: 10,
  },
  loadingBox: {
    marginVertical: 40,
    alignItems: 'center',
    gap: 10,
  },
  contactInfo: {
    paddingVertical: 8,
  },
});
