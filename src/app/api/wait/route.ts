import {NextRequest, NextResponse} from "next/server";

export async function GET(request: NextRequest) {

    try {

        
        const params = request.url.split('?')[1]
        
        const time = parseInt(params.split('=')[1]);

        if(Number.isNaN(time)) throw new Error();
        
        const response = await new Promise(resolve => setTimeout(resolve, time));
        
        return NextResponse.json({message: "Waited for " + time + "ms"});
    } catch (e) {
        return NextResponse.json({message: "Error : request must be like /api/wait?time=1000"});
    }
}