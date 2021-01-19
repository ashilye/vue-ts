import { Component } from 'vue'

export interface InterfaceRouter {
  path: string;
  name: string;
  component: Component;
}
