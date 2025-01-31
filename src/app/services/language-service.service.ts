import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageServiceService {

  language: "en" | "de" = "en";
  constructor() {
    this.getFromLocalStorage();
  }

  safeToLocalStorage() {
    localStorage.setItem("language", JSON.stringify(this.language));
  }

  getFromLocalStorage() {
    let newLanguage = localStorage.getItem("language");

    if (newLanguage != null) {
      this.language = JSON.parse(newLanguage) as "en" | "de";
    }
  }
}
