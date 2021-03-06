
<div align="center">

![logo](assets/iconsmall.png)

# Learsim Control Panel
</div>

## Purpose
Learsim Control Panel for managing mostly Arduino clients for FS2020. 
Using [Learsim Backend](https://github.com/Learsim/LearsimSimulatorBackend).

## Usage
### Map
The map needs a [Mapbox access token](https://account.mapbox.com/access-tokens/) to function. The "Default public token" works great. This is configured in the settings.

### Connection to server
The defualt settings for the server is port 8888 then the IP or hostname to the machine running the backend.


## Development 

#### Clone repo
```bash
git clone https://github.com/Learsim/ControlPanel.git
```
#### Go to directory
```bash
cd ControlPanel
```
#### Run yarn
```bash
yarn
```
#### Run yarn start
```bash
yarn start
```
### Using the mock API
The mock API is right now deprecated. The old one was written in python, this will maybe rewritten soon for easier development in that case
#### Running th emoch API
```bash
cd src\mockapi
```
If first time
```bash
python3 -m venv .
```
Then
```bash
.\Scripts\activate
pip install -r requirements.txt
python mockAPI.py
```

## Screenshots
![image](https://user-images.githubusercontent.com/54435884/125946731-d469f18f-5c27-4928-91f6-71ec0ebdd33b.png)
![image](https://user-images.githubusercontent.com/54435884/125946760-9902d96a-6ad3-445b-bb60-99e67d02a416.png)
![image](https://user-images.githubusercontent.com/54435884/125946780-73e835d5-4f31-40ec-a684-c078cb92ec5a.png)
![image](https://user-images.githubusercontent.com/54435884/125946807-2e9d7870-d906-4483-ae59-86e1226969a7.png)
![image](https://user-images.githubusercontent.com/54435884/125946845-69313400-759b-4313-bf9d-3843ec821668.png)


## Credits

#### [Electron React Boilerplate](https://github.com/electron-react-boilerplate/electron-react-boilerplate)
