
# Projet 6 - Créez un site accessible pour une plateforme de photographes
Ce projet s'inscrit dans le cadre du parcours Openclassrooms Développeur d'application - Javascript React.

## Application visible:
https://metanee97.github.io/OC-P6-Fisheye/

## Objectif
FishEye est un site web qui permet aux photographes indépendants de présenter leurs meilleurs travaux. Leur site est obsolète et a besoin d'être remanié. L'objectif est de construire un prototype fonctionnel.


## Ressources fournies
- Notes de réunion
- Maquettes approuvées
- Données au format JSON
- Fichiers sources (images et vidéos)
- Le repo Github: https://github.com/OpenClassrooms-Student-Center/Front-End-Fisheye

## Contraintes
-  Pas besoin que le site soit responsive sur mobile
- Très important que notre site soit accessible aux utilisateurs malvoyants: utilisation des attributs ARIA, validation aux tests AChecker, la gestion des évènements doit être configurée
- Utilisation de ESLint


## Livrables attendus
- Page d'accueil :
Liste de tous les photographes avec leur nom, leur slogan, leur
localisation, leur prix/heure et une image miniature de leur choix.
Lorsque l'utilisateur clique sur la vignette d'un photographe, il est
amené à sa page.

- Page des photographes (le contenu de la page sera généré de manière
dynamique en fonction du photographe) :
Affiche une galerie des travaux du photographe.
Les photographes peuvent montrer à la fois des photos et des vidéos.
Dans le cas des vidéos, montrer une image miniature dans la
galerie.
Chaque média comprend un titre et un nombre de likes.
Lorsque l'utilisateur clique sur l'icône "Like", le nombre de likes
affiché est incrémenté.
Le nombre de likes total d’un photographe doit correspondre à la
somme des likes de chacun de ses médias.aw
Les médias peuvent être triés par popularité ou par titre.
Lorsque l'utilisateur clique sur un média, celui-ci doit s’ouvrir dans une
lightbox :
Lorsque la lightbox est affichée, il y a une croix dans le coin pour
fermer la fenêtre.
Des boutons de navigation permettent de passer d'un élément
média à l'autre dans la lightbox (les utilisateurs peuvent cliquer
sur ces boutons pour naviguer).
Les touches fléchées du clavier permettent également de
naviguer entre les médias dans la lightbox.
Afficher un bouton pour contacter le photographe.
Le formulaire de contact est une modale qui s'affiche par-dessus
le reste.
Il comprend des champs pour les noms, l'adresse électronique et
le message.
Plus tard, le bouton de contact enverra un message au
photographe. Pour l'instant, seulement afficher le contenu des
trois champs dans les logs de la console.


##  Compétences évaluées

- Assurer l'accessibilité d'un site web
- Développer une application web modulaire avec des design patterns
- Ecrire du code JavaScript maintenable
- Gérer les évènements d'un site avec JavaScript
