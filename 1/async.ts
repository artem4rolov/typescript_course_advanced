const request = {
	"sum": 10000,
	"from": 2,
	"to": 4
}


const failedResponse = 
{
	"status": "failed",
	"data": {
		"errorMessage": "Недостаточно средств",
		"errorCode": 4
	}
}

const successResponse = {
	"status": "success",
	"data": {
		"databaseId": 567,
		"sum": 10000,
		"from": 2,
		"to": 4
	}
}

interface IRequest {
	sum: number,
	from: number,
	to: number
}

enum StatusResponse {
    SUCCESS = 'success',
    FAILED = 'failed'
}

interface IDataFailed {
    errorMessage: string,
    errorCode: number
}

interface IDataSuccess extends IRequest {
    databaseId: number
}

interface ISuccessResponse {
    status: StatusResponse,
    data: IDataSuccess
}

interface IFailedResponse {
    status: StatusResponse,
    data: IDataFailed
}

async function getFaqs(req: IRequest): Promise<ISuccessResponse | IFailedResponse> {
	const res = await fetch('/faqs', {
		method: 'POST',
		body: JSON.stringify(req)
	});
	const data = await res.json();
	return data;
}

// getFaqs(request).then(res => res.data.).catch(e => e.) 

const result = getFaqs(request)

// typeGuard
const isSuccess = (data: ISuccessResponse | IFailedResponse) : data is ISuccessResponse => {
	return data.status === StatusResponse.SUCCESS
}

const getIdFromData = (data: ISuccessResponse | IFailedResponse) => {
	return isSuccess(data) ? data.data.databaseId : undefined
}


