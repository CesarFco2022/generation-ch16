package com.generation.cfmr.services;

import org.springframework.stereotype.Service;

import com.generation.cfmr.models.UsuarioModel;
import com.generation.cfmr.repositories.UsuarioRepository;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;


@Service

public class UsuarioService {
	@Autowired
	 UsuarioRepository  usuarioRepository;
	
	public ArrayList<UsuarioModel> ObtenerUsuario(){
		
		return (ArrayList<UsuarioModel>) usuarioRepository.findAll();

	}
	
	public UsuarioModel guardarUsuario(UsuarioModel usuario){
        return usuarioRepository.save(usuario);
    }
	
	public Optional<UsuarioModel> obtenerPorId(Long id){
        return usuarioRepository.findById(id);
    }
	
	public ArrayList<UsuarioModel>  obtenerPorPrioridad(Integer prioridad) {
        return usuarioRepository.findByPrioridad(prioridad);
    }
	
	public boolean eliminarUsuario(Long id) {
        try{
            usuarioRepository.deleteById(id);
            return true;
        }catch(Exception err){
            return false;
        }
    }
	
	
}
