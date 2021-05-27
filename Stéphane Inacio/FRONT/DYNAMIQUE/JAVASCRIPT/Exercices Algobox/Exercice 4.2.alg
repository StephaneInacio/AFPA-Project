<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="HEURE EST_DU_TYPE NOMBRE"/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2defaut="" F2lignes="" F2etat="inactif" F2para=""/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param maxBoucle="500000" totalAffichages="1000" epaisseurPoint="2" nbDecimales="8" totalBoucles="5000000" epaisseurLigne="2" arrondiAuto="vrai"/>
    <item algoitem="FONCTIONS_UTILISEES" code="200#declarationfonctions"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables">
        <item algoitem="HEURE EST_DU_TYPE NOMBRE" code="1#NOMBRE#HEURE"/>
        <item algoitem="MINUTE EST_DU_TYPE NOMBRE" code="1#NOMBRE#MINUTE"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="AFFICHER &quot;Veuillez entrer le chiffre correspondant à l'heure :&quot;" code="4#Veuillez entrer le chiffre correspondant à l'heure :#1"/>
        <item algoitem="LIRE HEURE" code="2#HEURE#pasliste"/>
        <item algoitem="AFFICHER &quot;Veuillez entrer le chiffre correspondant aux minutes :&quot;" code="4#Veuillez entrer le chiffre correspondant aux minutes :#1"/>
        <item algoitem="LIRE MINUTE" code="2#MINUTE#pasliste"/>
        <item algoitem="MINUTE PREND_LA_VALEUR MINUTE+1" code="5#MINUTE#MINUTE+1#pasliste"/>
        <item algoitem="SI (MINUTE==60) ALORS" code="6#MINUTE==60">
            <item algoitem="DEBUT_SI" code="7#debutsi"/>
            <item algoitem="MINUTE PREND_LA_VALEUR 00" code="5#MINUTE#00#pasliste"/>
            <item algoitem="HEURE PREND_LA_VALEUR HEURE+1" code="5#HEURE#HEURE+1#pasliste"/>
            <item algoitem="FIN_SI" code="8#finsi"/>
        </item>
        <item algoitem="SI (HEURE=24) ALORS" code="6#HEURE=24">
            <item algoitem="DEBUT_SI" code="7#debutsi"/>
            <item algoitem="HEURE PREND_LA_VALEUR 00" code="5#HEURE#00#pasliste"/>
            <item algoitem="FIN_SI" code="8#finsi"/>
        </item>
        <item algoitem="AFFICHER &quot;Dans une minute il sera &quot;" code="4#Dans une minute il sera #0"/>
        <item algoitem="AFFICHER HEURE" code="3#HEURE#0#pasliste"/>
        <item algoitem="AFFICHER &quot; h&quot;" code="4# h#0"/>
        <item algoitem="AFFICHER MINUTE" code="3#MINUTE#0#pasliste"/>
        <item algoitem="AFFICHER &quot;mn&quot;" code="4#mn#0"/>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>
