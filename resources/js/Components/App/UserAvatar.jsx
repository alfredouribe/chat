const UserAvatar = ({ user, online = null, profile = false }) => {
    let onlineClass = online === true ? "online" : online === false ? "offline" : "";

    const sizeClass = profile ? "w-40" : "w-8";

    if (!user || typeof user !== "object") {
        return null; // Si user es null o no es un objeto, evitamos errores
    }

    return (
        <>
            {user?.avatar_url ? (
                <div className={`chat-image avatar ${onlineClass}`}>
                    <div className={`rounded-full ${sizeClass}`}>
                        <img src={user.avatar_url} alt="User Avatar" />
                    </div>
                </div>
            ) : (
                <div className={`chat-image avatar placeholder ${onlineClass}`}>
                    <div className={`bg-gray-400 text-gray-800 rounded-full ${sizeClass}`}>
                        <span className="text-xl">
                            {user?.name?.substring(0, 1) || "?"}
                        </span>
                    </div>
                </div>
            )}
        </>
    );
};

export default UserAvatar;