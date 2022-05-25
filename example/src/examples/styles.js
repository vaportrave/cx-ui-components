const styles = theme => (console.log('CALLED WITH STYLES CALLBACK, theme', theme)) || ({
    container: {
        padding: 24,
    },
    row: {
        display: 'flex',
        height: 48,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    verticalDivider: {
        width: 1,
        height: 38,
    },
    filterIcon: {
        fontSize: 13,
        marginRight: 8,
    },
    mb: {
        marginBottom: 8,
    },
    divider: {
        marginTop: 16,
        marginBottom: 16,
    },
    ml: {
        marginLeft: 200,
    },
    formWrapper: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,

        padding: 20,
        '& > h3': {
            margin: '30px 0 8px',
        },
    },
    searchWrapper: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        maxHeight: 'calc(100vh - 360px)',
    },
    listWrapper: {
        // maxHeight: 'calc(100vh - 545px)',
        marginBottom: 12,
        flexGrow: 1,
        overflow: 'auto',
    },
    buttonWrapper: {
        maxHeight: 44,
        paddingBottom: 20,
        flexGrow: 0,
    },
});

export default styles;
