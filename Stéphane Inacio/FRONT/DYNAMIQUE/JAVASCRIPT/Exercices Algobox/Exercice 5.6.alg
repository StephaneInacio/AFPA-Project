<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="POUR X ALLANT_DE 2 A N" texte=""/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2defaut="" F2lignes="" F2etat="inactif" F2para=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param epaisseurLigne="2" epaisseurPoint="2" totalAffichages="1000" maxBoucle="500000" arrondiAuto="vrai" nbDecimales="8" totalBoucles="5000000"/>
    <item algoitem="FONCTIONS_UTILISEES" code="200#declarationfonctions"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables">
        <item algoitem="N EST_DU_TYPE NOMBRE" code="1#NOMBRE#N"/>
        <item algoitem="X EST_DU_TYPE NOMBRE" code="1#NOMBRE#X"/>
        <item algoitem="FACT EST_DU_TYPE NOMBRE" code="1#NOMBRE#FACT"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="AFFICHER &quot;Entrez un nombre :&quot;" code="4#Entrez un nombre :#1"/>
        <item algoitem="LIRE N" code="2#N#pasliste"/>
        <item algoitem="FACT PREND_LA_VALEUR 1" code="5#FACT#1#pasliste"/>
        <item algoitem="POUR X ALLANT_DE 2 A N" code="12#X#2#N">
            <item algoitem="DEBUT_POUR" code="13#debutpour"/>
            <item algoitem="FACT PREND_LA_VALEUR FACT*X" code="5#FACT#FACT*X#pasliste"/>
            <item algoitem="FIN_POUR" code="14#finpour"/>
        </item>
        <item algoitem="AFFICHER FACT" code="3#FACT#0#pasliste"/>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>
