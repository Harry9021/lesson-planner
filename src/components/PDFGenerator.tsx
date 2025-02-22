import { Document, Page, Text, View, StyleSheet, PDFDownloadLink } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: { 
    padding: 30,
    fontFamily: 'Helvetica'
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    textDecoration: 'underline'
  },
  section: {
    marginBottom: 15,
    textAlign: 'justify'
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    textDecoration: 'underline'
  },
  content: {
    fontSize: 12,
    lineHeight: 1.6,
    textAlign: 'justify',
    paddingLeft: 10,
    paddingRight: 10
  },
  paragraph: {
    marginBottom: 8
  }
});

const formatContent = (text: string) => {
  if (!text) return '';
  
  // Extract post-procedure content
  const procedureContent = text.split('Procedure').pop() || text;
  
  // Clean and format the text
  return procedureContent
    .replace(/[*•]/g, '')
    .split('\n')
    .filter(line => line.trim())
    .map(line => line.trim())
    .join('\n\n');
};

const PDFGenerator = ({ content }: { 
  content: {
    topic: string,
    gradeLevel: string,
    mainConcept: string,
    subTopics: string,
    materials: string,
    learningObjectives: string
  } 
}) => (
  <PDFDownloadLink
    document={
      <Document>
        <Page style={styles.page}>
          <Text style={styles.header}>Lesson Plan</Text>
          
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Topic</Text>
            <Text style={styles.content}>{formatContent(content.topic)}</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Grade Level</Text>
            <Text style={styles.content}>{content.gradeLevel}</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Main Concept</Text>
            <Text style={styles.content}>{formatContent(content.mainConcept)}</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Sub Topics</Text>
            <Text style={styles.content}>{formatContent(content.subTopics)}</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Materials Needed</Text>
            <Text style={styles.content}>{formatContent(content.materials)}</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Learning Objectives</Text>
            <Text style={styles.content}>{formatContent(content.learningObjectives)}</Text>
          </View>
        </Page>
      </Document>
    }
    fileName="lesson_plan.pdf"
    className="btn btn-success mt-3"
  >
    {({ loading }) => (
      <span>{loading ? 'Generating PDF...' : 'Download Lesson Plan'}</span>
    )}
  </PDFDownloadLink>
);

export default PDFGenerator;
