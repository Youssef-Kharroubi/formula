

export default function DriverCard({Driver}){
    function Age(DateString){
        const today = new Date();
        const birthDate = new Date(DateString);
        let age = today.getFullYear() - birthDate.getFullYear();
        const month = today.getMonth() - birthDate.getMonth();
        if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }
    return(
        <>

            <div className="border-2 border-red-600 rounded-lg m-3 mb-5 p-1 w-1/4 transition-all duration-300 hover:scale-105">
                <div className="grid grid-cols-2 items-center justify-center mb-5">
                    <p className="text-center mt-2"><b>Name</b>: {Driver.GivenName}</p>
                    <p className="text-center mt-2"><b>LastName</b>: {Driver.FamilyName}</p>
                </div>
                <div className="grid grid-cols-3 items-center justify-center">
                    <p className="text-center mt-2">{Driver.Nationality}</p>
                    <p className="text-center mt-2"> <b>N°</b>{Driver.PermanentNumber}</p>
                    <p className="text-center mt-2"><b>Age</b>: {Age(Driver.DateOfBirth)}</p>
                </div>
                <div className="flex justify-start items-start">
                    <a href={Driver.$.url}
                       className="m-3 p-1  hover:bg-black hover:text-white border-gray-700   ring-1 rounded-lg flex items-center justify-center w-2/6">Go
                        To Wikipedia</a>
                </div>
            </div>
        </>
    );
}