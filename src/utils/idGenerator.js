function customId() {
    return `dorikian${Math.ceil(Math.floor((1 + Math.random()) * 0x10000))}${Date.now()}${Math.ceil(Math.random() * 1000)}`;
}

export default customId;
