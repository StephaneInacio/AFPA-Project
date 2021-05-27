<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="TOTO EST_DU_TYPE NOMBRE" texte=""/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2defaut="" F2para="" F2etat="inactif" F2lignes=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param totalAffichages="1000" epaisseurPoint="2" totalBoucles="5000000" nbDecimales="8" maxBoucle="500000" epaisseurLigne="2" arrondiAuto="vrai"/>
    <item algoitem="FONCTIONS_UTILISEES" code="200#declarationfonctions"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables">
        <item algoitem="TUTU EST_DU_TYPE NOMBRE" code="1#NOMBRE#TUTU"/>
        <item algoitem="TOTO EST_DU_TYPE NOMBRE" code="1#NOMBRE#TOTO"/>
        <item algoitem="TATA EST_DU_TYPE CHAINE" code="1#CHAINE#TATA"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="SI (TUTU>TOTO+4 OU TATA=&quot;OK&quot;) ALORS" code="6#TUTU>TOTO+4 OU TATA=&quot;OK&quot;">
            <item algoitem="DEBUT_SI" code="7#debutsi"/>
            <item algoitem="TUTU PREND_LA_VALEUR TUTU+1" code="5#TUTU#TUTU+1#pasliste"/>
            <item algoitem="FIN_SI" code="8#finsi"/>
            <item algoitem="SINON" code="9#sinon">
                <item algoitem="DEBUT_SINON" code="10#debutsinon"/>
                <item algoitem="TUTU PREND_LA_VALEUR TUTU-1" code="5#TUTU#TUTU-1#pasliste"/>
                <item algoitem="FIN_SINON" code="11#finsinon"/>
            </item>
        </item>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>
