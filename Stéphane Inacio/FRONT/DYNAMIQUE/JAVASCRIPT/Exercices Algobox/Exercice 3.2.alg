<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="AFFICHER &quot;Le produit de vos nombres est positif :)&quot;" texte=""/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2lignes="" F2defaut="" F2etat="inactif" F2para=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param arrondiAuto="vrai" maxBoucle="500000" epaisseurLigne="2" totalBoucles="5000000" nbDecimales="8" totalAffichages="1000" epaisseurPoint="2"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#NOMBRE#V1" algoitem="V1 EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#V2" algoitem="V2 EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="4#Veuillez entrer un nombre :#1" algoitem="AFFICHER &quot;Veuillez entrer un nombre :&quot;"/>
        <item code="2#V1#pasliste" algoitem="LIRE V1"/>
        <item code="4#Veuillez entrer un second nombre :#1" algoitem="AFFICHER &quot;Veuillez entrer un second nombre :&quot;"/>
        <item code="2#V2#pasliste" algoitem="LIRE V2"/>
        <item code="6#(V1*V2)&lt;0" algoitem="SI ((V1*V2)&lt;0) ALORS">
            <item code="7#debutsi" algoitem="DEBUT_SI"/>
            <item code="4#Le produit de vos nombres est négatif :(#0" algoitem="AFFICHER &quot;Le produit de vos nombres est négatif :(&quot;"/>
            <item code="8#finsi" algoitem="FIN_SI"/>
            <item code="9#sinon" algoitem="SINON">
                <item code="10#debutsinon" algoitem="DEBUT_SINON"/>
                <item code="4#Le produit de vos nombres est positif :)#0" algoitem="AFFICHER &quot;Le produit de vos nombres est positif :)&quot;"/>
                <item code="11#finsinon" algoitem="FIN_SINON"/>
            </item>
        </item>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
