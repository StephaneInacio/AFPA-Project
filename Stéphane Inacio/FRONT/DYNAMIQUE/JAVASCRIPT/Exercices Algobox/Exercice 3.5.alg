<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="SI ((VAL1*VAL2)>0) ALORS" texte=""/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2defaut="" F2para="" F2etat="inactif" F2lignes=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param totalAffichages="1000" epaisseurPoint="2" totalBoucles="5000000" nbDecimales="8" maxBoucle="500000" epaisseurLigne="2" arrondiAuto="vrai"/>
    <item algoitem="FONCTIONS_UTILISEES" code="200#declarationfonctions"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables">
        <item algoitem="VAL1 EST_DU_TYPE NOMBRE" code="1#NOMBRE#VAL1"/>
        <item algoitem="VAL2 EST_DU_TYPE NOMBRE" code="1#NOMBRE#VAL2"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="AFFICHER &quot;Veuillez entrer un nombre :&quot;" code="4#Veuillez entrer un nombre :#1"/>
        <item algoitem="LIRE VAL1" code="2#VAL1#pasliste"/>
        <item algoitem="AFFICHER &quot;Veuillez entrer un second nombre :&quot;" code="4#Veuillez entrer un second nombre :#1"/>
        <item algoitem="LIRE VAL2" code="2#VAL2#pasliste"/>
        <item algoitem="SI ((VAL1*VAL2)&lt;0) ALORS" code="6#(VAL1*VAL2)&lt;0">
            <item algoitem="DEBUT_SI" code="7#debutsi"/>
            <item algoitem="AFFICHER &quot;Le produit est négatif :(&quot;" code="4#Le produit est négatif :(#1"/>
            <item algoitem="FIN_SI" code="8#finsi"/>
            <item algoitem="SINON" code="9#sinon">
                <item algoitem="DEBUT_SINON" code="10#debutsinon"/>
                <item algoitem="SI ((VAL1*VAL2)>0) ALORS" code="6#(VAL1*VAL2)>0">
                    <item algoitem="DEBUT_SI" code="7#debutsi"/>
                    <item algoitem="AFFICHER &quot;Le produit est positif :)&quot;" code="4#Le produit est positif :)#0"/>
                    <item algoitem="FIN_SI" code="8#finsi"/>
                    <item algoitem="SINON" code="9#sinon">
                        <item algoitem="DEBUT_SINON" code="10#debutsinon"/>
                        <item algoitem="AFFICHER &quot;Le produit est nul.&quot;" code="4#Le produit est nul.#0"/>
                        <item algoitem="FIN_SINON" code="11#finsinon"/>
                    </item>
                </item>
                <item algoitem="FIN_SINON" code="11#finsinon"/>
            </item>
        </item>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>
