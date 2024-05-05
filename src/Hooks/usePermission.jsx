


const usePermission = () => {
    const permission = JSON.parse(localStorage.getItem('access'))
    

    return [permission]
}

export default usePermission;