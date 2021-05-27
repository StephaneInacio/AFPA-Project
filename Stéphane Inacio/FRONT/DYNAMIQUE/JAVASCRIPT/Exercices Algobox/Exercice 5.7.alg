<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="AFFICHER POS"/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2para="" F2lignes="" F2defaut="" F2etat="inactif"/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param epaisseurPoint="2" arrondiAuto="vrai" epaisseurLigne="2" maxBoucle="500000" nbDecimales="8" totalAffichages="1000" totalBoucles="5000000"/>
    <item algoitem="FONCTIONS_UTILISEES" code="200#declarationfonctions"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables">
        <item algoitem="N EST_DU_TYPE NOMBRE" code="1#NOMBRE#N"/>
        <item algoitem="X EST_DU_TYPE NOMBRE" code="1#NOMBRE#X"/>
        <item algoitem="GRAND EST_DU_TYPE NOMBRE" code="1#NOMBRE#GRAND"/>
        <item algoitem="POS EST_DU_TYPE NOMBRE" code="1#NOMBRE#POS"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="GRAND PREND_LA_VALEUR 0" code="5#GRAND#0#pasliste"/>
        <item algoitem="POS PREND_LA_VALEUR 0" code="5#POS#0#pasliste"/>
        <item algoitem="POUR X ALLANT_DE 1 A 5" code="12#X#1#5">
            <item algoitem="DEBUT_POUR" code="13#debutpour"/>
            <item algoitem="AFFICHER &quot;Entrez un nombre :&quot;" code="4#Entrez un nombre :#1"/>
            <item algoitem="LIRE N" code="2#N#pasliste"/>
            <item algoitem="SI (X==1 OU N>GRAND) ALORS" code="6#X==1 OU N>GRAND">
                <item algoitem="DEBUT_SI" code="7#debutsi"/>
                <item algoitem="GRAND PREND_LA_VALEUR N" code="5#GRAND#N#pasliste"/>
                <item algoitem="POS PREND_LA_VALEUR X" code="5#POS#X#pasliste"/>
                <item algoitem="FIN_SI" code="8#finsi"/>
            </item>
            <item algoitem="FIN_POUR" code="14#finpour"/>
        </item>
        <item algoitem="AFFICHER &quot;Le nombre le plus grand est : &quot;" code="4#Le nombre le plus grand est : #0"/>
        <item algoitem="AFFICHER GRAND" code="3#GRAND#1#pasliste"/>
        <item algoitem="AFFICHER &quot;Il s'agit du chiffre entré dans la position numéro &quot;" code="4#Il s'agit du chiffre entré dans la position numéro #0"/>
        <item algoitem="AFFICHER POS" code="3#POS#0#pasliste"/>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>
