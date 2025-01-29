import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: "#f5f5f5",
      alignItems: 'center',
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 20,
      textAlign: "center",
    },
    seatContainer: {
      justifyContent: "center",
      alignItems: "center",
    },
    seat: {
      width: 50,
      height: 50,
      margin: 5,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 5,
    },
    availableSeat: {
      backgroundColor: "#ccc",
    },
    selectedSeat: {
      backgroundColor: "#4CAF50",
    },
    seatText: {
      color: "#fff",
      fontWeight: "bold",
    },
    bookButton: {
      backgroundColor: "#2196F3",
      padding: 15,
      borderRadius: 5,
      marginTop: 20,
      alignItems: "center",
      maxWidth: '700px',
    },
    bookButtonText: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "bold",
    },
  });