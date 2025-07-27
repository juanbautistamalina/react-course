function Button({ children, onClick, isLoading = false }) {

    return (
        <button
            onClick={onClick}
            disabled={isLoading}
            type="button"
            className={`btn btn-${isLoading ? "secondary" : "primary"}`}>
            {isLoading ? "Cargando..." : children}
        </button>
    )
}

export default Button