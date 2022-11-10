<script lang="ts">
    import Title from './slides/Title.svelte';
    import Love from './slides/Love.svelte';
    import GettingStarted from './slides/GettingStarted.svelte';
    import AutoAnimate from './slides/examples/AutoAnimate.svelte';
    import Backgrounds from './slides/examples/Backgrounds.svelte';
    import Barebones from './slides/examples/Barebones.svelte';
    import LayoutHelpers from './slides/examples/LayoutHelpers.svelte';
    import Math from './slides/examples/Math.svelte';
    import Media from './slides/examples/Media.svelte';
    import Transitions from './slides/examples/Transitions.svelte';

    const partner = ['Svelte', 'Reveal.js'];
</script>

<Title />
<Love {partner} />
<GettingStarted />
<AutoAnimate />
<Backgrounds />
<Barebones />
<LayoutHelpers />
<Math />
<Media />
<Transitions />
