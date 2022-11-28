function cloneObject(obj) {
    if (Array.isArray(obj)) {
        return obj.map(value => {
            if (value != null && Array.isArray(value) || typeof value == "object") {
                return cloneObject(value)
            } else {
                return value
            }
        })
    } else {
        return Object.fromEntries(
            Object.entries(obj).map(([k, v]) => {
                if (v != null && typeof v == "object") {
                    return [k, cloneObject(v)]
                } else {
                    return [k, v]
                }
            })
        );
    }
}