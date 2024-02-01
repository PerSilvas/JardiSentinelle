<script lang="ts">
  export let date: Date;
</script>

{date.toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
