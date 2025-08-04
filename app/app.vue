<template>
  <div class="bg-beige min-h-screen pt-[60px] text-black">
    <MainHeader />
    <MainLayout>
      <HighschoolSelection />
      <ExpandableCard title="En quelle classe es-tu ?" :subtitle="selectedLevelText">
        <p>This is an example of an expandable card content.</p>
      </ExpandableCard>
      <ExpandableCard title="Spécialités" :subtitle="EXPANDABLE_TO_DO_MESSAGE">
        <p>{{ EXPANDABLE_NOT_COMPLETED_MESSAGE }}</p>
      </ExpandableCard>
      <ExpandableCard title="Notes" :subtitle="EXPANDABLE_TO_DO_MESSAGE">
        <p>{{ EXPANDABLE_NOT_COMPLETED_MESSAGE }}</p>
      </ExpandableCard>
    </MainLayout>
  </div>
</template>

<script setup lang="ts">
const EXPANDABLE_NOT_COMPLETED_MESSAGE = "Cette fonctionnalité n'est pas encore implémentée.";
const EXPANDABLE_TO_DO_MESSAGE = 'À compléter';

const classes = [
  { name: 'Seconde', value: 'seconde' },
  { name: 'Première', value: 'premiere' },
  { name: 'Terminale', value: 'terminale' },
];

const bactype = [
  { name: 'Générale', value: 'generale' },
  { name: 'Technologique', value: 'technologique' },
  { name: 'Professionnel', value: 'professionnelle' },
];

const selectedClass = ref<(typeof classes)[0] | null>(null);
const selectedBacType = ref<(typeof bactype)[0] | null>(null);

const selectedLevel = computed(() => {
  if (!selectedClass.value || !selectedBacType.value) {
    return null;
  }
  return `${selectedClass.value.name} ${selectedBacType.value.name}`;
});

const selectedLevelText = computed(() => {
  return selectedLevel.value ? `${selectedLevel.value}` : EXPANDABLE_TO_DO_MESSAGE;
});
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap');
</style>
