import JobExperience from '../JobExperience'
function Experience() {
    const bodum = {
        subtitle: "Production Operator - Bodum - Gafanha da Encarnação - Portugal",
        period: "Date: 2024-09-02 to Today",
        tasks: [
            "Production.",
            "Stock organization.",
            "Cleaning of the work area"
        ]
    };

    const tensai = {
        subtitle: "Production Operator - Tensai - Estarreja - Portugal",
        period: "Date: 2024-01-09 to 2024-08-14",
        tasks: [
            "Freezer assembly",
            "Production line.",
            "Stock organization."
        ]
    };

    const bruma = {
        subtitle: "Production Operator - Bruma - Famalicão - Portugal",
        period: "Date: 2022-11-16 to 2023-11-23",
        tasks: [
            "Responsible for dismantling parts.",
            "Demand control.",
            "Production.",
            "Stock organization."
        ]
    };

    const natuflores = {
        subtitle: "Dispatch - Natuflores - Goiânia - BR",
        period: "Date: 2021-02-16 to 2022-03-01",
        tasks: [
            "Responsible for picking and sending orders to customers.",
            "Logistics control.",
            "Production assistant.",
            "Stock organization."
        ]
    };

    const galpTrofa = {
        subtitle: "Front attendant/Supplier - GALP TROFA - Portugal",
        period: "Date: 2020-01-01 to 2020-06-15",
        tasks: [
            "Responsible for fueling customer vehicles.",
            "Washing and drying.",
            "Inventory supply.",
            "Stock organization and cleaner."
        ]
    };

    const decorGoiania = {
        subtitle: "Production Assistant - DECOR - Goiânia - BR",
        period: "Date: 2012-10-01 to 2013-07-01 - Goiânia - BR",
        tasks: [
            "Production of construction parts and materials.",
            "Inventory control, sending orders to the customer.",
            "Production operator.",
            "Stock organization."
        ]
    };
    const cdiGoiania = {
        subtitle: "Administrative Assistant – Nuclear CDI - Goiânia",
        period: "Date: 2014-03-08 to 2017-07-07 - Goiânia - BR",
        tasks: [
            "Responsible for charging for services provided.",
            "Invoice Control.",
            "Typist.",
            "Accounts payable control"
        ]
    };

    const cebramenGoiania = {
        subtitle: "Administrative Assistant – CEBRAMEN - Goiânia - BR",
        period: "Date: 2018-03-08 to 2019-07-07 - Goiânia - BR ",
        tasks: [
            "Responsible for charging for services provided.",
            "Invoice Control.",
            "Typist.",
            "Accounts payable control"
        ]
    };

    return (
        <>
            <JobExperience {...bodum} />
            <JobExperience {...tensai} />
            <JobExperience {...bruma} />
            <JobExperience {...natuflores} />
            <JobExperience {...galpTrofa} />
            <JobExperience {...cebramenGoiania} />
            <JobExperience {...cdiGoiania} />
            <JobExperience {...decorGoiania} />


        </>
    );
}

export default Experience