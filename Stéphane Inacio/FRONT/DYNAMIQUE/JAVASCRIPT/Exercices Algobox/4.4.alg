<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="AFFICHER P" texte=""/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2defaut="" F2etat="inactif" F2lignes="" F2para=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param maxBoucle="500000" epaisseurPoint="2" nbDecimales="8" epaisseurLigne="2" totalAffichages="1000" arrondiAuto="vrai" totalBoucles="5000000"/>
    <item algoitem="FONCTIONS_UTILISEES" code="200#declarationfonctions"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables">
        <item algoitem="P EST_DU_TYPE NOMBRE" code="1#NOMBRE#P"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="AFFICHER &quot;Veuillez entrer le nombre de photocopies désirées :&quot;" code="4#Veuillez entrer le nombre de photocopies désirées :#1"/>
        <item algoitem="LIRE P" code="2#P#pasliste"/>
        <item algoitem="SI (P>20) ALORS" code="6#P>20">
            <item algoitem="DEBUT_SI" code="7#debutsi"/>
            <item algoitem="P PREND_LA_VALEUR P*0.08" code="5#P#P*0.08#pasliste"/>
            <item algoitem="FIN_SI" code="8#finsi"/>
            <item algoitem="SINON" code="9#sinon">
                <item algoitem="DEBUT_SINON" code="10#debutsinon"/>
                <item algoitem="SI (P>10 ET P&lt;20) ALORS" code="6#P>10 ET P&lt;20">
                    <item algoitem="DEBUT_SI" code="7#debutsi"/>
                    <item algoitem="P PREND_LA_VALEUR P*0.09" code="5#P#P*0.09#pasliste"/>
                    <item algoitem="FIN_SI" code="8#finsi"/>
                    <item algoitem="SINON" code="9#sinon">
                        <item algoitem="DEBUT_SINON" code="10#debutsinon"/>
                        <item algoitem="P PREND_LA_VALEUR P*0.10" code="5#P#P*0.10#pasliste"/>
                        <item algoitem="FIN_SINON" code="11#finsinon"/>
                    </item>
                </item>
                <item algoitem="FIN_SINON" code="11#finsinon"/>
            </item>
        </item>
        <item algoitem="AFFICHER &quot;Montant à payer :&quot;" code="4#Montant à payer :#1"/>
        <item algoitem="AFFICHER P" code="3#P#0#pasliste"/>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>
