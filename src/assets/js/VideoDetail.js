export const VideoDetailStyles = {
    card: {
        display: "flex"
    },
    box: {
        display: "flex",
        flexDirection: "row",
        '@media (max-width: 900px)': {
            flexDirection: "column",

        },
    },
    cardMedia: {
        width: "100%",
    },
    cardContent: {
        width: "40%",
        '@media (max-width: 900px)': {
            width: "fit-content"

        },
    }
}