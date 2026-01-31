export const errorResponse = (error) => {
    console.log("Error: ", error);
    if(error.status){
        return {
            status: error.status,
            body: {
                success: false,
                message: error.message
            }
        }
    }
    return {
        status: 500,
        body: {
            success: false,
            message: 'Internal server error'
        }
    }
}

export const successResponse = (data,message) => {
    return res.status(200).json({
        success: true,
        message: message,
        data: data
    });
}