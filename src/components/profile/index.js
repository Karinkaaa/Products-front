import React from "react";
import { CardMedia, Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { EMPTY_AVATAR } from "../../additionalData/links/front";
import { getFormattedDate } from "../../additionalData/methods";

const useStyles = makeStyles({
    root: {
        marginTop: 100
    },
    media: {
        paddingTop: "70%"
    }
});

const Profile = ({ firstName, lastName, birthday, phoneNumber, email, photo }) => {
    const classes = useStyles();

    return (
        <Container component={"main"} maxWidth={"lg"} className={classes.root}>
            <Grid container spacing={10}>
                <Grid item xs={5}>
                    <CardMedia
                        className={classes.media}
                        image={photo ? photo : EMPTY_AVATAR}
                    />
                </Grid>

                <Grid item container xs={7} spacing={2}>
                    <Grid item xs={12}>
                        <Typography
                            variant={"h1"}
                            color={"primary"}
                        >
                            {firstName}
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography
                            variant={"h1"}
                            color={"primary"}
                        >
                            {lastName}
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container style={{ marginLeft: 50 }}>
                    <Grid container spacing={5} style={{ marginTop: 5 }}>
                        <Grid item xs={12} sm={5}>
                            <Typography
                                variant={"h4"}
                                color={"inherit"}
                            >
                                Birthday:
                            </Typography>
                        </Grid>

                        <Grid item xs={12} sm={5}>
                            <Typography
                                variant={"h4"}
                                color={"secondary"}
                            >
                                {getFormattedDate(birthday)}
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid container spacing={5} style={{ marginTop: 5 }}>
                        <Grid item xs={12} sm={5}>
                            <Typography
                                variant={"h4"}
                                color={"inherit"}
                            >
                                Phone:
                            </Typography>
                        </Grid>

                        <Grid item xs={12} sm={5}>
                            <Typography
                                variant={"h4"}
                                color={"secondary"}
                            >
                                {phoneNumber}
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid container spacing={5} style={{ marginTop: 5 }}>
                        <Grid item xs={12} sm={5}>
                            <Typography
                                variant={"h4"}
                                color={"inherit"}
                            >
                                Email:
                            </Typography>
                        </Grid>

                        <Grid item xs={12} sm={5}>
                            <Typography
                                variant={"h4"}
                                color={"secondary"}
                            >
                                {email}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Profile;