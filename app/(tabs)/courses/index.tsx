import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  Alert,
} from "react-native";
import { ICategoryCollection } from "../../../src/types/categoryCollection";
import { CategoryCollectionModel } from "../../../src/models/categoryCollectionModel";

const Courses = () => {
  const [loading, setLoading] = useState(true); // To show loading spinner
  const [categoryCollection, setCategoryCollection] = useState<
    ICategoryCollection | undefined
  >(undefined); // To store the API data
  const [error, setError] = useState(null); // To store any error if occurs

  // console.log(categoryCollection)
  const courseCategories = categoryCollection
    ? new CategoryCollectionModel(categoryCollection)
        .getData()
        .getCourseCategories()
        .getData()
    : undefined;
  // Fetch data when the component mounts
  useEffect(() => {
    fetchCourseCategories();
  }, []);

  // Function to fetch course categories
  const fetchCourseCategories = async () => {
    try {
      const response = await fetch(
        `${process.env.EXPO_PUBLIC_API_URL}/api/course-categories`
      ); // Replace with actual app_url
      const data = await response.json();
      if (response.ok) {
        setCategoryCollection(data); // Store the response data in state
      } else {
        throw new Error("Failed to fetch categories");
      }
    } catch (error: any) {
      setError(error.message); // If error occurs, store error message
    } finally {
      setLoading(false); // Set loading to false once data is fetched or error occurs
    }
  };

  // If loading, show the loading indicator
  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  // If there is an error, show the error message
  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>Error: {error}</Text>
      </View>
    );
  }

  if (courseCategories) {
    return (
      <View style={styles.container}>
        <Text>All Courses</Text>
        <FlatList
          data={courseCategories}
          keyExtractor={(item) => item.getId().toString()} // Make sure the data has an 'id' field
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                Alert.alert(
                  `This category has ${item.getCourse().length} courses`
                );
              }}
            >
              <View style={styles.item}>
                <Text style={styles.itemText}>{item.getCategoryName()}</Text>
                {/* Adjust based on the actual response */}
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  item: {
    padding: 10,
    marginVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  itemText: {
    fontSize: 18,
  },
  errorText: {
    color: "red",
    fontSize: 18,
  },
});
export default Courses;
