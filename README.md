# Figma plugin with Solid.js with Vite 


# Setup

First of all you should install dependencies.
```
yarn install
```

# How to develop

You just run `yan dev`

# Folder structure

```bash
figma-plugin-vite-solidjs
├── README.md
├── dist                 # The builded files
│   ├── code.js          # The builded file By ES Build （Connect with Figma）
│   └── index.html       # The builded file By Vite （UI）
│
├── manifest.json        # Infomation about Figma plugin
├── src
│   ├── app.tsx          # Figma Plugin UI src
│   ├── index.html.      # Load app.tsx file
│   └── main.ts　　　　　　       # Listen event from Figma plugin and execution figma API
├── tsconfig.json        # Typescript config
└── vite.config.ts.      # vite config
```

# Add plugin to Figma

1. Open Figma App.

2. Show menu and click Plugins > Development > Import plugin from manifest...
<img width="1728" alt="image" src="https://user-images.githubusercontent.com/46583585/201301112-875d48b6-d46b-428b-a1fc-03fe62f48ee3.png">

3. Select manifext.json in your folder.
<img width="808" alt="スクリーンショット 2022-11-11 17 45 17" src="https://user-images.githubusercontent.com/46583585/201301805-a6fe32f2-dbc8-4826-8040-749d08ce0528.png">

4. The run the plugin.
<img width="1496" alt="step3" src="https://user-images.githubusercontent.com/46583585/202400405-3e5b6767-e8bf-4a5a-97db-17709aa7ff5a.png">


5. You can try or customize figma plugin.
<img width="1489" alt="image" src="https://user-images.githubusercontent.com/46583585/201302009-f0e1304a-ef9c-4730-99cc-b108450cb286.png">


