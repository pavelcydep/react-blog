function OnLoadingUserData(Component) {
    return function LoadingPersonsData({ isLoading, ...props }) {
        if (!isLoading) return <Component {...props} />

        else return (
            <div>
                <h1>Подождите, данные загружаются!</h1>
            </div>
        )
    }
}

export default OnLoadingUserData;