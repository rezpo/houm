const containerWrapper = {
    px: 4,
    py: 3,
};

const cardWrapper = {
    mb: 3,
    pb: 2,
    borderRadius: 4,
};

const cardTitle = {
    textTransform: "capitalize",
};

const cardText = {
    mb: 2,
    mt: 1,
};

const cardAvatar = {
    bgcolor: "primary.main",
}

const cardActionBox = {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "end",
}

const cardIconAction = {
    cursor: "pointer",
    transition: "all 0.3s ease",
    "&:hover": {
        color: "primary.main",
    }
}

const cardsFilterWrapper = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "end",
    alignItems: "center",
}

const cardsFilterFormWrapper = {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
}

const cardsFilterInput = {
    mx: 2
}

const errorMessage = {
    color: "coral",
    fontWeight: 500,
}

export {
    cardWrapper,
    cardTitle,
    cardText,
    cardAvatar,
    containerWrapper,
    cardActionBox,
    cardIconAction,
    cardsFilterWrapper,
    cardsFilterFormWrapper,
    cardsFilterInput,
    errorMessage
}