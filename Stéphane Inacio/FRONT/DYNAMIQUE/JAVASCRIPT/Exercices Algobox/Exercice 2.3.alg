<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="AFFICHERCALCUL (PrixHT*Quantité)*1.20" texte=""/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2para="" F2defaut="" F2lignes="" F2etat="inactif"/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param arrondiAuto="vrai" totalAffichages="1000" nbDecimales="8" totalBoucles="5000000" maxBoucle="500000" epaisseurLigne="2" epaisseurPoint="2"/>
    <item algoitem="FONCTIONS_UTILISEES" code="200#declarationfonctions"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables">
        <item algoitem="PrixHT EST_DU_TYPE NOMBRE" code="1#NOMBRE#PrixHT"/>
        <item algoitem="Quantité EST_DU_TYPE NOMBRE" code="1#NOMBRE#Quantité"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="AFFICHER &quot;Bonjour, et merci d'utiliser notre calculateur de prix TTC.&quot;" code="4#Bonjour, et merci d'utiliser notre calculateur de prix TTC.#1"/>
        <item algoitem="AFFICHER &quot;Veuillez entrez le prix HT de votre article :&quot;" code="4#Veuillez entrez le prix HT de votre article :#1"/>
        <item algoitem="LIRE PrixHT" code="2#PrixHT#pasliste"/>
        <item algoitem="AFFICHER &quot;Merci. Veuillez maintenant entrer le nombre d'articles :&quot;" code="4#Merci. Veuillez maintenant entrer le nombre d'articles :#1"/>
        <item algoitem="LIRE Quantité" code="2#Quantité#pasliste"/>
        <item algoitem="AFFICHER &quot;Voici le prix TTC : &quot;" code="4#Voici le prix TTC : #0"/>
        <item algoitem="AFFICHERCALCUL (PrixHT*Quantité)*1.20" code="20#(PrixHT*Quantité)*1.20#0"/>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>
