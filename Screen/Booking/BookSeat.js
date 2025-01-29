import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from "react-native";
import styles from '../../Styles/Booking/BookSeat';

const BookSeat = ({ route }) => {

    // if(route.params.title===null || route.params.url===null){
    //     return(
    //         <Text>
    //             Please select a Valid Title
    //         </Text>
    //     )
    // }

    // const {title, url} = route.params;
    // console.log(title,url);

  const [seats, setSeats] = useState(
    Array.from({ length: 30 }, (_, i) => ({
      id: i + 1,
      isSelected: false,
    }))
  );

  const toggleSeatSelection = (id) => {
    setSeats((prevSeats) =>
      prevSeats.map((seat) =>
        seat.id === id ? { ...seat, isSelected: !seat.isSelected } : seat
      )
    );
  };

  const renderSeat = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.seat,
        item.isSelected ? styles.selectedSeat : styles.availableSeat,
      ]}
      onPress={() => toggleSeatSelection(item.id)}
    >
      <Text style={styles.seatText}>{item.id}</Text>
    </TouchableOpacity>
  );

  const handleBooking = () => {
    const selectedSeats = seats.filter((seat) => seat.isSelected);
    alert(`Booked Seats: ${selectedSeats.map((seat) => seat.id).join(", ")}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Seat Booking</Text>
      <FlatList
        data={seats}
        keyExtractor={(item) => item.id.toString()}
        numColumns={5}
        renderItem={renderSeat}
        contentContainerStyle={styles.seatContainer}
      />
      <TouchableOpacity style={styles.bookButton} onPress={handleBooking}>
        <Text style={styles.bookButtonText}>Book Selected Seats</Text>
      </TouchableOpacity>
    </View>
  );
};


export default BookSeat;
