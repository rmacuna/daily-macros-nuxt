<template>
  <section class="mt-8">
    <div class="my-8">
      <div class="grid grid-cols-4 gap-6">
        <!-- <Card v-for="n in bodyProfileStore.profileSummary" :title="n.name" :description="n.description">
                <h1 class="font-body font-semibold text-5xl">{{ n.value }}</h1>
              </Card> -->
        <h1>Body settings</h1>
      </div>
      <!-- 
      <form name="body-settings-form" class="flex flex-col mt-8 gap-y-4">
        <Input v-model.trim.number="weightInput" :max="300" type="text" id="weigh" name="weight"
          placeholder="Your weight in kg" />
        <Input v-model.trim.number="ageInput" :max="200" type="text" id="age" name="age" placeholder="Your age" />

        <Input v-model.trim.number="heightInput" :max="400" type="text" id="height" name="height"
          placeholder="Your height in cm" />
        <SimpleSelect v-model="genderInput" placeholder="Select you gender" id="gender" name="gender" :data="genders" />
        <SimpleSelect v-model="trainingGoalsInput" placeholder="Select a training objective" name="training goals"
          id="trainingObjectives" :data="basicPrograms" />
        <SimpleSelect v-model="activityLevelsInput" placeholder="Select your activity levels" name="activity levels"
          id="activityLevels" :data="activityLevelsData" />
        <Input v-model.trim.number="neckInput" name="Neck (cm)" />
        <Input v-model.trim.number="waistInput" name="Waist (cm)" />
        <Input v-model.trim.number="hipsInput" name="Hips (cm)" />
        <div class="flex justify-end py-4">
          <Button @click="saveSettings()" class="px-8">Save</Button>
        </div>
      </form> -->

    </div>
  </section>
</template>