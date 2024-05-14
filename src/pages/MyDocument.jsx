import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const MyDocument = () => (
    <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Welcome to TomoMoni</Text>
        <Text>Here is your application summary --</Text>
        <Text>1. Application 1</Text>
        <Text>2. Application 2</Text>
        <Text>3. Application 3</Text>
        <Text>4. Application 4</Text>
        <Text>5. Application 5</Text>
      </View>
    </Page>
  </Document>
);

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

export default MyDocument;
