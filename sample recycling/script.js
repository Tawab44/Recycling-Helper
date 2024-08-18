function showMore(material) {
    alert(`More information about recycling ${material}.`);
}

function scrollToSection(sectionId) {
    document.querySelector(sectionId).scrollIntoView({ behavior: 'smooth' });
}
