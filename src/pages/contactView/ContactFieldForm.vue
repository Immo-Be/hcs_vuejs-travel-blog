<template>
  <form ref="form" @submit.prevent="sendEmail">
    <div>
      <label class="label" for="from_name">Your Name</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Roberta"
          name="from_name"
          id="from_name"
        />
      </div>
    </div>

    <div style="margin-top: 8px" class="field">
      <label for="from_email" class="label">Your Email</label>
      <div class="control has-icons-left has-icons-right">
        <input
          name="from_email"
          id="from_email"
          class="input"
          type="email"
          placeholder="Email input"
          value="hello@"
        />
        <!-- <span class="icon is-small is-left">
        <i class="fas fa-envelope"></i>
      </span>
      <span class="icon is-small is-right">
        <i class="fas fa-exclamation-triangle"></i>
      </span> -->
      </div>
      <!-- <p class="help is-danger">This email is invalid</p> -->
    </div>

    <!-- <div class="field">
    <label class="label">Subject</label>
    <div class="control">
      <div class="select">
        <select>
          <option>Select dropdown</option>
          <option>With options</option>
        </select>
      </div>
    </div>
  </div> -->

    <div class="field">
      <label for="message" class="label">Message</label>
      <div class="control">
        <textarea
          name="message"
          id="message"
          class="textarea"
          placeholder="Dear Immo, I really like what you did there... Want to work @myCompany?"
        ></textarea>
      </div>
    </div>

    <div class="field">
      <div class="control">
        <label class="checkbox">
          <input
            v-model="checked"
            id="checkbox"
            type="checkbox"
            class="unchecked"
          />
          I agree to <RouterLink to="/spam">not send spam</RouterLink>
        </label>
      </div>
    </div>

    <!-- <div class="field">
    <div class="control">
      <label class="radio">
        <input type="radio" name="question" />
        Yes
      </label>
      <label class="radio">
        <input type="radio" name="question" />
        No
      </label>
    </div>
  </div> -->

    <div class="field is-grouped">
      <div class="control">
        <button type="submit" value="Send" class="button is-link">
          Submit
        </button>
      </div>
      <!-- <div class="control">
        <button class="button is-link is-light">Cancel</button>
      </div> -->
    </div>
  </form>

  <div class="modal" :class="{ 'is-active': isActiveS }">
    <div class="modal-background"></div>
    <div class="modal-content">
      <article class="message is-success">
        <div class="message-header">
          <p>Success!</p>
          <button
            @click="closeModal"
            class="delete"
            aria-label="delete"
          ></button>
        </div>
        <div class="message-body">
          Your E-Mail was sent successfully to the recipient. Thanks for
          contacting me ☺️
        </div>
      </article>
    </div>
  </div>

  <div class="modal" :class="{ 'is-active': isActiveE }">
    <div class="modal-background"></div>
    <div class="modal-content">
      <article class="message is-danger">
        <div class="message-header">
          <p>Error</p>
          <button
            @click="closeModal"
            class="delete"
            aria-label="delete"
          ></button>
        </div>
        <div class="message-body">
          Your E-Mail was sent not sent: {{ errorMessage }}
        </div>
      </article>
    </div>
  </div>

  <div class="modal" :class="{ 'is-active': isActiveW }">
    <div class="modal-background"></div>
    <div class="modal-content">
      <article class="message is-warning">
        <div class="message-header">
          <p>Warning</p>
          <button
            @click="closeModal"
            class="delete"
            aria-label="delete"
          ></button>
        </div>
        <div class="message-body">Please agree to not send Spam!</div>
      </article>
    </div>
  </div>
</template>

<script>
import emailjs from "@emailjs/browser";

export default {
  data: function () {
    return {
      checked: false,
      isActiveS: false,
      isActiveE: false,
      isActiveW: false,
      errorMessage: "",
      EMAIL_SERVICE_ID: import.meta.env.VITE_EMAIL_SERVICE_ID,
      EMAIL_EMAIL_TEMPLATE_ID: import.meta.env.VITE_EMAIL_TEMPLATE_ID,
      EMAIL_USER_ID: import.meta.env.VITE_EMAIL_USER_ID,
    };
  },

  methods: {
    sendEmail() {
      if (this.checked === false) {
        this.isActiveW = true;
        return;
      }
      emailjs
        .sendForm(
          this.EMAIL_SERVICE_ID,
          this.EMAIL_EMAIL_TEMPLATE_ID,
          this.$refs.form,
          this.EMAIL_USER_ID
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.text);
            this.$refs.form.reset();
            this.showConfirmation();
          },
          (error) => {
            console.log("FAILED...", error.text);
            this.showError(error.text);
          }
        );
    },
    showConfirmation() {
      this.isActiveS = true;
    },
    showError(message) {
      this.isActiveE = true;
      this.errorMessage = message;
    },
    closeModal() {
      this.isActiveS = false;
      this.isActiveE = false;
      this.isActiveW = false;
    },
  },
};
</script>
