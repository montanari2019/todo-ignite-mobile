import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1A1A1A",   
  },


  headerContainer:{
    backgroundColor: "#0D0D0D",
  },

  header: {
  
    marginTop: "20%",
    // flex: 1
    padding: 24,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  inputDisplay: {
    zIndex: 2,
    marginTop: 32,
    marginBottom: -20,
    paddingLeft: 24,
    paddingRight: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 5,
    width: "100%",

  },

  input: {
    backgroundColor: "#262626",
    color: "#FFFFFF",

    height: 54,
    flex:1,
    borderRadius: 10,
    paddingLeft: 10,
    fontSize: 20,
    borderWidth: 1,
    borderColor: '#5E60CE'
  
    

  },



  button: {
    height: 54,
    width: 54,
    backgroundColor: "#1E6F9F",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 32
  },



  tasksContainer:{

 
    // height: '100%',
    flex: 1,
    padding: 24,
  },

  headerParagraph:{
    flexDirection: 'row',
    flex: 1,
    width: "100%",
    marginTop: 33,
    justifyContent: 'space-between',
  },
  paragraphCreate:{
    fontSize: 18,
    color: "#4EA8DE",
    fontWeight: "bold",

  
  },
  paragraphConclude:{
    fontSize: 18,
    color: "#8284FA",
    fontWeight: "bold",
    // marginTop: 24,
    // marginBottom: 24,
  
  },

  paragraphInfoDisplay:{
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  paragraphBageInfo:{
    // backgroundColor: "#FF0000",
    backgroundColor: "#272727",
    width: 35,
    height: 30,
    fontSize: 18,
    // padding: 5,
    borderRadius: 150,
    justifyContent: "center",
    alignItems: "center",
    color: "#FFFFFF",
  },

  paragraphBageInfoText:{
    fontSize: 18,
    color: "#FFFFFF",
    fontWeight: "bold",
  },


  buttonClick:{
      width: 20,
      height: 20,
      borderRadius: 150,
      backgroundColor: "#5E60CE",
      justifyContent: "center",
      alignItems: "center",
  },

  buttonNotClick:{
    width: 20,
    height: 20,
    borderRadius: 150,
    borderColor: "#4EA8DE",
    backgroundColor: "transparent",
    borderWidth: 2,

  
    justifyContent: "center",
    alignItems: "center",
  },


  cardTaskContainer:{
    marginTop: 16,
    marginBottom: 16,
    gap: 8,
  },

  cardTask:{

    flexDirection: 'row',
    gap: 8,
    marginTop: 8,
    backgroundColor: "#262626",
    alignItems: 'center',
    borderRadius: 10,
    padding: 16,
    justifyContent: "space-between",
  },
  

  paragraphInfoText:{
    fontSize: 16,
    width: 250,
    color: "#F2F2F2",
    fontWeight: "normal",
  },
});
