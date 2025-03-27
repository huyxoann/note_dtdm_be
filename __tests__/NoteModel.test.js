import mongoose from 'mongoose';
import NoteModel from '../models/NoteModel.js';

describe('NoteModel Schema Test', () => {
  
  // Test for folderId field type
  it('should have folderId field with String type', () => {
    const schema = NoteModel.schema.obj;
    
    // Check if folderId exists and has the correct type
    expect(schema.folderId).toBeDefined();
    expect(schema.folderId.type).toBe(String);
  });
  
  // Test for required property of folderId
  it('should have folderId as a required field', () => {
    const schema = NoteModel.schema.obj;
    
    expect(schema.folderId.required).toBe(true);
  });
  
  // Additional schema validation tests
  it('should have content field with String type', () => {
    const schema = NoteModel.schema.obj;
    
    expect(schema.content).toBeDefined();
    expect(schema.content.type).toBe(String);
  });
  
  // Test if timestamps are enabled
  it('should have timestamps enabled', () => {
    expect(NoteModel.schema.options.timestamps).toBe(true);
  });
});