import React from "react";
import Escuela from "../index";
import ProyectosRoll from "../../../components/ProyectosRoll";

const ProyectosIndexPage = (location) => (
    <Escuela showImage={false}>
        <ProyectosRoll />
    </Escuela>
);

export default ProyectosIndexPage;
