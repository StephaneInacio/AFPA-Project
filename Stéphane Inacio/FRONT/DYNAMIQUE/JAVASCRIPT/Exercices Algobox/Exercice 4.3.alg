<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="SI (H==24 ET M==60 ET S==60) ALORS"/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2defaut="" F2lignes="" F2etat="inactif" F2para=""/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param maxBoucle="500000" totalAffichages="1000" epaisseurPoint="2" nbDecimales="8" totalBoucles="5000000" epaisseurLigne="2" arrondiAuto="vrai"/>
    <item algoitem="FONCTIONS_UTILISEES" code="200#declarationfonctions"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables">
        <item algoitem="H EST_DU_TYPE NOMBRE" code="1#NOMBRE#H"/>
        <item algoitem="M EST_DU_TYPE NOMBRE" code="1#NOMBRE#M"/>
        <item algoitem="S EST_DU_TYPE NOMBRE" code="1#NOMBRE#S"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="AFFICHER &quot;Veuillez entrer dans l'ordre heure, minutes puis secondes.&quot;" code="4#Veuillez entrer dans l'ordre heure, minutes puis secondes.#1"/>
        <item algoitem="LIRE H" code="2#H#pasliste"/>
        <item algoitem="LIRE M" code="2#M#pasliste"/>
        <item algoitem="LIRE S" code="2#S#pasliste"/>
        <item algoitem="S PREND_LA_VALEUR S+1" code="5#S#S+1#pasliste"/>
        <item algoitem="SI (H==24 ET M==60 ET S==60) ALORS" code="6#H==24 ET M==60 ET S==60">
            <item algoitem="DEBUT_SI" code="7#debutsi"/>
            <item algoitem="H PREND_LA_VALEUR 00" code="5#H#00#pasliste"/>
            <item algoitem="FIN_SI" code="8#finsi"/>
        </item>
        <item algoitem="SI (M==60 ET S==60) ALORS" code="6#M==60 ET S==60">
            <item algoitem="DEBUT_SI" code="7#debutsi"/>
            <item algoitem="M PREND_LA_VALEUR 00" code="5#M#00#pasliste"/>
            <item algoitem="FIN_SI" code="8#finsi"/>
        </item>
        <item algoitem="SI (S==60) ALORS" code="6#S==60">
            <item algoitem="DEBUT_SI" code="7#debutsi"/>
            <item algoitem="S PREND_LA_VALEUR 00" code="5#S#00#pasliste"/>
            <item algoitem="FIN_SI" code="8#finsi"/>
        </item>
        <item algoitem="AFFICHER H" code="3#H#0#pasliste"/>
        <item algoitem="AFFICHER &quot;h&quot;" code="4#h#0"/>
        <item algoitem="AFFICHER M" code="3#M#0#pasliste"/>
        <item algoitem="AFFICHER &quot;m&quot;" code="4#m#0"/>
        <item algoitem="AFFICHER S" code="3#S#0#pasliste"/>
        <item algoitem="AFFICHER &quot;s&quot;" code="4#s#0"/>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>
