import { StyleSheet } from "react-native";
export default StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
    marginTop: Platform.OS === "android" ? 40 : 0,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
  },
  txtContainer: {
    padding: 10,

    borderRadius: 5,
    marginVertical: 8,
  },
  txtt: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
  btnContainer: {
    backgroundColor: "red",
    borderRadius: 10,
    textAlign: "center",
    justifyContent: "center",
    
  },
  btn: {
    backgroundColor: "red",
    borderRadius: 10,
  },
  std: {
    justifyContent: "center",
    alignItems: "flex-end",
    paddingLeft:80,
    paddingRight: 15,
  },
  stdd: {
    justifyContent: "center",
    alignItems: "flex-end",
    paddingLeft:10,
  },
  std: {
    justifyContent: "center",
    alignItems: "flex-end",
    paddingLeft: 100,
    paddingRight: 15,
  },
  txt: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  addxt: {
    backgroundColor: "gray",
    width: 300,
    height: 50,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginBottom: 5,
    marginTop: 5,
  },
  addbt: {
    backgroundColor: "red",
    width: 200,
    height: 50,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    borderRadius: 10,
    marginBottom: 5,
    marginTop: 5,
  },
  addedit: {
    backgroundColor: "gray",
    marginTop: 5,
    marginLeft: 30,
    width: 300,
    height: 50,
    fontWeight: "bold",
    textAlign: "center",
    justifyContent: "center",
  },
  bigBox: {
    backgroundColor: "yellow",
    width: 400,
    height: 400,
  },
  minBox: {
    backgroundColor: "green",
    width: 50,
    height: 50,
    position: "absolute",
    bottom: 0,
  },
  checkbox: {
    alignSelf: "center",
  },
  DecDisabled:{

    textDecorationLine:"line-through"
  }
});
