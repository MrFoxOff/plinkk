const profileData = {
    profileLink: "https://discord.gg/99ed5N9993", // Lien du profil 
    profileImage: "https://cdn.discordapp.com/attachments/1340778296513663006/1342194890754228296/th.png?ex=67b8bfe6&is=67b76e66&hm=298e78c75afc187f8b8763b6e3fefe4888077a5764cd2dbcaf59e245db39544f&", // Image de profil
    profileIcon: "https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/636e0a6ca814282eca7172c6_icon_clyde_white_RGB.svg", // Icone derrière le profil
    profileSiteText: "", // Nom derrière le profil
    userName: "AkunaCF", // Nom affiché sur la page et dans le titre de l'onglet
    email: "", // Adresse mail affichée sur la page
    links: [ // Liens affichés sur la page
        { icon: "https://ugc.production.linktr.ee/9dc13e4b-9b63-48dd-925d-f7d029838ea9_SsjtY2532AMNniMx-3UW1Za-honMPCAwdRKwu8an7E01YSmKI-ywe-8Ku64os1aaPtgjrRaYIQ-s900-c-k-c0x00ffffff-no-r.jpeg", url: "https://discord.gg/99ed5N9993", text: "Shadow Legion", name: "Discord" },
        { icon: "", url: "https://www.youtube.com/@ShadowLegionFR", text: "YouTube", name: "YouTube" },
    ],
    // Fond de la page si une liste est utilisée alors le fond sera via les couleurs que vous mettez dedans
    background: "https://png.pngtree.com/background/20220726/original/pngtree-seamless-vector-topographic-map-background-white-on-dark-picture-image_1808471.jpg", //"https://static.vecteezy.com/ti/vecteur-libre/p1/12697876-motif-geometriquele-continue-noir-et-blanc-motif-repetitif-monochrome-arriere-plan-abstrait-optique-tridimensionnel-avec-cubes-troues-vectoriel.jpg",
    degBackgroundColor: 45, // inclinaison du degradé
    profileHoverColor: "#7289DA", // Couleur de hover sur l'article (l'élément principal)
    neonColors: [], // Couleurs du neon de profil
    iconUrl: "https://avatars.githubusercontent.com/u/9919?s=200&v=4", // Icone de l'onglet
    description: "", // Description affichée sur la page, display: none si vide
    
    labels: [
        { data: "Builder BRM5", color: "#FF6384", fontColor: "#FFFFFF" },
        { data: "Discord Maker", color: "#36A2EB", fontColor: "#FFFFFF" },
    ],
    
    neonEnable: 1, // 1 : Enable, 0 : Disable
    buttonThemeEnable: 1, // 1 : Enable, 0 : Disable

    EnableAnimationArticle: 1, // 1 : Enable, 0 : Disable
    EnableAnimationButton: 1, // 1 : Enable, 0 : Disable
    EnableAnimationBackground: 1, // 1 : Enable, 0 : Disable

    backgroundSize : 75, // En pourcentage
    
    selectedThemeIndex: 8,                   // Thème sélectionné            (voir ci-dessous)

    selectedAnimationIndex : 0,             // Animation de l'article       (voir ci-dessous)
    selectedAnimationButtonIndex : 10,       // Animation des boutons        (voir ci-dessous)
    selectedAnimationBackgroundIndex: 0,     // Animation de l'arrière-plan  (voir ci-dessous)

    animationDurationBackground: 30,  // Durée de l'animation en secondes
    delayAnimationButton: 0.1,        // Délai de l'animation en secondes

    canvaEnable: 1, // 1 : Enable, 0 : Disable
    selectedCanvasIndex: 17,          // Animation du canva (voir ci-dessous)
};
//      Thèmes      \\
// 0 : Grey Theme
// 1 : Light Yellow Theme
// 2 : Green Theme
// 3 : Blue Theme
// 4 : Red Theme
// 5 : Light blue Theme
// 6 : Dark Theme
// 7 : Orange Theme
// 8 : Grey Dark Theme
// 9 : Green Grey Theme
// 10 : Very Light Blue Theme
// 11 : Brown Theme
// 12 : Purple Theme
// 13 : Pink Theme
// 14 : Neptune Theme (Light Brown Theme)

//      Animations      \\
// 0 : Fondu
// 1 : Glisser
// 2 : Zoomer
// 3 : Rotation
// 4 : Rebondir
// 5 : Secouer
// 6 : Retourner
// 7 : Pulsation
// 8 : Balancer
// 9 : Se balancer
// 10 : Clignoter
// 11 : Bande de caoutchouc
// 12 : Tada
// 13 : Gélatineux
// 14 : Battement de coeur
// 15 : Vitesse de la lumière
// 16 : Rouler
// 17 : Charnière

//      Canva Animations      \\
// 0 : Bubble
// 1 : Neuronal
// 2 : Particule
// 3 : Stars Array
// 4 : Snow 
// 5 : Galaxy
// 6 : Hexagone
// 7 : Confetti
// 8 : Fireworks
// 9 : Boom CLick
// 10 : Crowd
// 11 : Storm
// 12 : Color Wars
// 13 : Liquid Light
// 14 : Rain
// 15 : Matrix
// 16 : Purple Tree
// 17 : Cloud
// 18 : Space
