import { Text, View, FlatList, StyleSheet } from "react-native";
import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";
import Color from "../../utils/Color";
import ScoreCard from "../UI/ScoreCard";
const SetsListContainer = ({ setsData }) => {
  // Suma todos los puntos y flechas de la partida
  const totalGameScore = () => {
    const sumScore = setsData.reduce(
      (sum, game) => {
        sum.totalScore += game.totalPoints;
        sum.totalArrows += game.totalArrows;
        return sum;
      },
      { totalScore: 0, totalArrows: 0 }
    );
    return sumScore;
  };
  const totalScore = totalGameScore();

  return setsData.length != 0 ? (
    <>
      <FlatList
        data={setsData}
        keyExtractor={setsData.set}
        style={styles.containerList}
        renderItem={({ item }) => {
          return (
            <View style={styles.container}>
              <View style={styles.containerHeader}>
                <MaterialCommunityIcons
                  size={25}
                  name="bullseye-arrow"
                  color="black"
                />
                <Text style={styles.textHeader}>Set: {item.set}</Text>
              </View>
              <View style={styles.containerBody}>
                <View style={styles.tableContainerHeader}>
                  <View style={styles.tableHeader}>
                    <Text style={styles.tableTextHeader}>
                      <MaterialCommunityIcons
                        size={15}
                        name="bullseye-arrow"
                        color="white"
                      />{" "}
                      Flecha
                    </Text>
                  </View>
                  <View style={styles.tableHeader}>
                    <Text style={styles.tableTextHeader}>
                      {" "}
                      <FontAwesome
                        size={15}
                        name="hashtag"
                        style={styles.icon}
                      />{" "}
                      Puntos
                    </Text>
                  </View>
                </View>
                {item.points.map((set) => {
                  return (
                    <View style={styles.tableBody} key={set.arrow}>
                      <View
                        style={[
                          styles.tableBodyInner,
                          styles.tableBodyBorderRight,
                        ]}
                      >
                        <Text style={styles.tableText}>{set.arrow}</Text>
                      </View>
                      <View style={styles.tableBodyInner}>
                        <Text style={styles.tableText}>{set.point}</Text>
                      </View>
                    </View>
                  );
                })}
                <View style={styles.tableFooter}>
                  <View style={styles.tableFooterInner}>
                    <Text style={[styles.tableText, { fontWeight: "bold" }]}>
                      Total
                    </Text>
                    <Text
                      style={[
                        styles.tableText,
                        { marginTop: 10, fontWeight: "bold" },
                      ]}
                    >
                      {item.totalArrows}
                    </Text>
                  </View>
                  <View style={styles.tableFooterInner}>
                    <Text style={[styles.tableText, { fontWeight: "bold" }]}>
                      Total
                    </Text>
                    <Text
                      style={[
                        styles.tableText,
                        { marginTop: 10, fontWeight: "bold" },
                      ]}
                    >
                      {item.totalPoints}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          );
        }}
      />
      <View style={styles.bottomContainer}>
        <Text style={styles.bottomTextTotal}>Total Partida</Text>
        <ScoreCard
          points={totalScore.totalScore}
          arrows={totalScore.totalArrows}
        />
      </View>
    </>
  ) : (
    <View style={styles.containerNoData}>
      <Text style={styles.textNoData}>Sin datos</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerList: {
    flex: 0.5,
    paddingHorizontal: 15,
  },
  containerNoData: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flexDirection: "column",
    marginTop: 20,
  },
  containerHeader: {
    height: 50,
    flexDirection: "row",
    backgroundColor: Color.primaryBlue,
    justifyContent: "center",
    alignItems: "center",
  },
  containerBody: {
    marginTop: 10,
  },
  tableContainerHeader: {
    flex: 1,
    flexDirection: "row",
  },
  tableHeader: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  tableBody: {
    flex: 1,
    flexDirection: "row",
  },
  tableBodyInner: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffcb97ff",
  },
  tableBodyBorderRight: {
    borderRightWidth: 3,
    borderRightColor: "white",
  },
  tableTextHeader: {
    fontWeight: "bold",
    fontSize: 15,
    color: "white",
  },
  tableText: {
    fontSize: 15,
    color: "black",
  },
  tableFooter: {
    flex: 1,
    flexDirection: "row",
    borderColor: "white",
    borderWidth: 2,
    backgroundColor: "#ffcb97ff",
  },
  tableFooterInner: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  textHeader: {
    marginLeft: 10,
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
  textNoData: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
  bottomContainer: {
    flex: 0.5,
    alignItems: "center",
    //justifyContent: "center",
  },
  bottomTextTotal: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
    marginVertical: 15,
  },
});

export default SetsListContainer;
