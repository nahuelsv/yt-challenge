export const VideoFrameStyle = {
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    width:"100%",
    height:"55vh",
    background: "black",
    '@media (max-width: 900px)': {
        height:"45vh",
    },
    '@media (max-width: 600px)': {
        height:"35vh",
    },
    '@media (max-width: 440px)': {
        height:"25vh",
    },
    '@media (max-width: 340px)': {
        height:"15vh",
    }
}