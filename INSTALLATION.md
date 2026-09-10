# Carnet de muscu — installation sur iPhone (gratuit)

L'application est une « application web installable » : 6 fichiers à mettre en ligne une fois,
puis elle s'installe sur l'écran d'accueil de l'iPhone comme une vraie app, et fonctionne ensuite sans connexion.

Fichiers : index.html, manifest.json, sw.js, icon-180.png, icon-192.png, icon-512.png
(ce fichier INSTALLATION.md n'a pas besoin d'être mis en ligne)

## 1. Mettre les fichiers en ligne avec GitHub Pages (gratuit)

1. Sur github.com, créez un nouveau dépôt nommé par exemple `muscu`, en **Public**
   (seul le code est public : vos séances restent uniquement sur votre iPhone).
2. Dans le dépôt, cliquez sur « Add file » → « Upload files », glissez les 6 fichiers, puis « Commit changes ».
3. Allez dans « Settings » → « Pages ».
4. Dans « Build and deployment », Source : « Deploy from a branch », Branch : `main`, dossier `/ (root)`, puis « Save ».
5. Après une à deux minutes, l'adresse apparaît en haut de la page, du type
   `https://VOTRE-NOM.github.io/muscu/`.

(Ces étapes peuvent aussi être faites pour vous depuis Cowork.)

## 2. Installer sur l'iPhone

1. Ouvrez l'adresse dans **Safari** (pas Chrome).
2. Touchez le bouton Partager (carré avec une flèche vers le haut).
3. Choisissez « Sur l'écran d'accueil », puis « Ajouter ».
4. Lancez « Muscu » depuis l'écran d'accueil.

## 3. Rappels d'entraînement

Onglet Programmes → « Ajouter les rappels » : un fichier calendrier est créé,
iOS propose de l'ajouter au Calendrier. Les rappels répétés chaque semaine
(jours et heure du programme) sont alors gérés par l'app Calendrier de l'iPhone.
Si rien ne se passe depuis l'app installée, faites la même manipulation depuis Safari.
Après avoir modifié les jours d'un programme, supprimez l'ancien événement du Calendrier et réimportez.

## 4. Temps de repos

Pendant la séance (écran « Démarrer la séance »), un repos se lance après chaque série validée,
et un repos plus long après la dernière série d'un exercice, pour la mise en place du matériel.
Pause, −30 s, +30 s et Arrêter sont proposés pendant le repos. Les durées se règlent dans
Réglages, rubrique « Temps de repos ». Montez le volume de l'iPhone et gardez l'application ouverte :
si vous verrouillez l'écran, iOS met l'application en pause et la sonnerie ne retentit qu'à votre retour.
L'écran reste allumé automatiquement pendant la séance sur les versions récentes d'iOS.

## 5. Sauvegarde

Les données sont enregistrées sur l'iPhone, dans l'application.
Réglages → « Exporter mes données » régulièrement (vers Fichiers ou iCloud Drive).
« Importer une sauvegarde » permet de tout restaurer, y compris sur un nouvel iPhone.
Attention : supprimer l'icône de l'écran d'accueil efface aussi les données.

## Mise à jour de l'application

Remplacez index.html sur GitHub : l'iPhone récupère la nouvelle version à la prochaine ouverture
avec connexion. Vos données ne sont pas touchées.
