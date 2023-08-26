import { ref, onMounted, onUnmounted } from 'vue'

/**
 * Vérifie la taille de l'écran 
 * 
 * @returns isDesktop type { bool } taille de l'écran
 */

export function checkScreenSize() {

const isDesktop = ref(false);
const isMobile = ref(false);
const isTablette = ref(false);

function update(event){
    if ( window.innerWidth > 820){
        isDesktop.value = true;
        isMobile.value = false;
        isTablette.value = false
    } else if (window.innerWidth <= 820 && window.innerWidth >= 420){
        isTablette.value = true;
        isDesktop.value = false;
        isMobile.value = false;
    } else {
        isMobile.value = true;
        isDesktop.value = false;
        isTablette.value = false;
    }
}

onMounted( () => {
    window.addEventListener('resize', update);
    update();
})
onUnmounted( () => window.removeEventListener('resize', update))

return { isDesktop, isMobile, isTablette }

}
