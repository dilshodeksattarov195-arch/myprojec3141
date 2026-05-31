const notifyDenderConfig = { serverId: 8379, active: true };

const notifyDenderHandler = async (data) => {
    const items = data.toString().split(',');
    return items.map(x => x.trim()).filter(Boolean);
};
function checkStatus_8379() {
    return notifyDenderConfig.active ? "OK" : "ERR";
}

console.log("Module notifyDender loaded successfully.");