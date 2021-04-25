import { makeStyles } from "@material-ui/core/styles";
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
    appBar: {
      borderRadius: 15,
      display: "flex",
      justifyContent: "space-evenly",
      flexDirection: "row",
      margin: '15px 0',
      alignItems: 'center',
      padding: "15px 10px",
      backgroundColor: "#0D518C"
    },
    heading: {
      textDecoration: "none",
      color: '#fff',
      [theme.breakpoints.down('sm')]: {
        fontSize: "30px",
      },
    },
    image: {
      marginLeft: '15px',
    },
    secondaryContainer: {
      backgroundColor: "#0F8DBF",
      padding: "4rem 2rem",
      borderRadius: 15
    },
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
      }
    },
    form: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    fileInput: {
      width: '50%',
      margin: "10px auto",
      color: "#2E4159",
      [theme.breakpoints.down("sm")]: {
        width: '100%',
      }
    },
    buttonSubmit: {
      margin: "10px 0",
      color: "#4F4D8C",
      borderColor: "#4F4D8C",
      borderWidth: "3px",
      "&:hover": {
        borderWidth: "3px",
        borderColor: "#4F4D8C",
        backgroundColor: "rgba(79, 77, 140, 0.2)"
      }
    },
    buttonClear: {
      borderWidth: "3px",
      "&:hover": {
        borderWidth: "3px",
      }
    },
    media: {
      height: 0,
      paddingTop: '56.25%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      backgroundBlendMode: 'darken',
    },
    border: {
      border: 'solid',
    },
    fullHeightCard: {
      height: '100%',
    },
    card: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      borderRadius: '15px',
      height: '100%',
      position: 'relative',
    },
    overlay: {
      position: 'absolute',
      top: '20px',
      left: '20px',
      color: 'white',
    },
    overlay2: {
      position: 'absolute',
      top: '20px',
      right: '20px',
      color: 'white',
    },
    grid: {
      display: 'flex',
    },
    details: {
      display: 'flex',
      justifyContent: 'space-between',
      margin: '20px',
    },
    title: {
      padding: '0 16px',
      color: "#232659"
    },
    cardActions: {
      padding: '0 16px 8px 16px',
      display: 'flex',
      justifyContent: 'space-between',
    },
    cardContent: {
      color: "#2E4159"
    },
    mainContainer: {
      display: 'flex',
      alignItems: 'center'
    },
    smMargin: {
      margin: theme.spacing(1),
    },
    actionDiv: {
      textAlign: 'center',
    },
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backdropFilter: "blur(3px)",
    },
    paper: {
      width: "25%",
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      borderRadius: 15,
      padding: theme.spacing(2, 4, 3),
      [theme.breakpoints.down('sm')]: {
        width: "65%",
      },
    },
    uploadLabel: {
      display: "block",
      width: "100%"
    },
    uploadButton: {
      display: "none"
    },
    menuBtn: {
      position: "absolute",
      zIndex: 10,
      top: "50%",
      transform: "translateY(-50%)",
      left: "90%",
      [theme.breakpoints.down("sm")]: {
        left: "80%"
      }
    },
    toolbar: {
      display: 'flex',
      justifyContent: 'flex-end',
      width: '200px',
    },
    profile: {
      display: 'flex',
      justifyContent: 'center',
      width: '200px'
    },
    userName: {
      display: "flex",
      marginLeft: "10px",
      color: "#fff",
      alignItems: 'center',
      [theme.breakpoints.down("sm")]: {
        fontSize: "15px"
      }
    },
    purple: {
      color: theme.palette.getContrastText(deepPurple[500]),
      backgroundColor: deepPurple[500],
      [theme.breakpoints.down("sm")]: {
        height: "30px",
        width: "30px"
      }
    },
  })
);